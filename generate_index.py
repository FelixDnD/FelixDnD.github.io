import os

def escape_liquid(text):
    return text.replace('{{', '{% raw %}{{{% endraw %}').replace('}}', '{% raw %}}}{% endraw %}')

def generate_index_md(root_dir='.'):
    index_lines = ['# Project Index\n']

    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames[:] = [d for d in dirnames if not d.startswith('.') and d != '.git']
        md_files = [f for f in filenames if f.endswith('.md') and not f.startswith('index.md')]

        if md_files:
            relative_path = os.path.relpath(dirpath, root_dir)
            header = f"## Folder: {relative_path}" if relative_path != '.' else "## Root Files"
            index_lines.append(header)
            for f in sorted(md_files):
                file_path = escape_liquid(os.path.join(relative_path, f).replace('\\', '/'))
                index_lines.append(f"- [{file_path}]({file_path})")
            index_lines.append('')  # blank line

    with open('index.md', 'w', encoding='utf-8') as f:
        f.write('\n'.join(index_lines))

    print("index.md generated!")
