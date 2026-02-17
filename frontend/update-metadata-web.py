#!/usr/bin/env python3
"""
Script untuk mengupdate metadata website (Open Graph tags)
Usage: python update_metadata.py
"""

import os
import re

def read_html_file(file_path):
    """Membaca file HTML"""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def write_html_file(file_path, content):
    """Menulis file HTML"""
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_metadata(html_content, title, description, image_url):
    """Update metadata dalam HTML content"""
    
    # Update title tag
    html_content = re.sub(
        r'<title>.*?</title>',
        f'<title>{title}</title>',
        html_content,
        flags=re.DOTALL
    )
    
    # Update or add meta description
    if re.search(r'<meta name="description"', html_content):
        html_content = re.sub(
            r'<meta name="description" content=".*?" />',
            f'<meta name="description" content="{description}" />',
            html_content
        )
    else:
        # Add after viewport meta tag
        html_content = re.sub(
            r'(<meta name="viewport"[^>]*>)',
            f'\\1\n    <meta name="description" content="{description}" />',
            html_content
        )
    
    # Cari posisi untuk menambahkan Open Graph tags
    # Kita akan menambahkannya setelah meta description
    meta_tags = f'''
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{description}" />
    <meta property="og:image" content="{image_url}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{description}" />
    <meta name="twitter:image" content="{image_url}" />'''
    
    # Hapus Open Graph tags yang sudah ada (jika ada)
    html_content = re.sub(
        r'\s*<!-- Open Graph / Facebook -->.*?<meta name="twitter:image"[^>]*>',
        '',
        html_content,
        flags=re.DOTALL
    )
    
    # Tambahkan meta tags setelah meta description
    html_content = re.sub(
        r'(<meta name="description"[^>]*>)',
        f'\\1{meta_tags}',
        html_content
    )
    
    return html_content

def main():
    # Path ke file index.html
    script_dir = os.path.dirname(os.path.abspath(__file__))
    html_file = os.path.join(script_dir, 'public', 'index.html')
    
    if not os.path.exists(html_file):
        print(f"Error: File {html_file} tidak ditemukan!")
        return
    
    print("=" * 60)
    print("WEBSITE METADATA UPDATER")
    print("=" * 60)
    print()
    
    # Input dari user
    print("Masukkan informasi metadata website:")
    print()
    
    title = input("Insert your title: ").strip()
    if not title:
        print("Error: Title tidak boleh kosong!")
        return
    
    description = input("Insert your description: ").strip()
    if not description:
        print("Error: Description tidak boleh kosong!")
        return
    
    image_url = input("Insert your image URL: ").strip()
    if not image_url:
        print("Error: Image URL tidak boleh kosong!")
        return
    
    print()
    print("=" * 60)
    print("PREVIEW:")
    print("=" * 60)
    print(f"Title       : {title}")
    print(f"Description : {description}")
    print(f"Image URL   : {image_url}")
    print("=" * 60)
    print()
    
    confirm = input("Apakah Anda yakin ingin mengupdate metadata? (y/n): ").strip().lower()
    
    if confirm != 'y':
        print("Update dibatalkan.")
        return
    
    # Baca file HTML
    html_content = read_html_file(html_file)
    
    # Update metadata
    updated_html = update_metadata(html_content, title, description, image_url)
    
    # Simpan file HTML
    write_html_file(html_file, updated_html)
    
    print()
    print("✓ Metadata berhasil diupdate!")
    print(f"✓ File updated: {html_file}")
    print()
    print("Metadata yang ditambahkan:")
    print("  - HTML Title")
    print("  - Meta Description")
    print("  - Open Graph Tags (Facebook)")
    print("  - Twitter Card Tags")
    print()
    print("Silakan test dengan:")
    print("  1. Rebuild aplikasi: npm run build")
    print("  2. Test di: https://www.opengraph.xyz/")
    print()

if __name__ == "__main__":
    main()
