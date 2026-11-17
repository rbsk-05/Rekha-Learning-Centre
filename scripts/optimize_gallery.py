import os
from PIL import Image, ImageOps

BACKUP_DIR = os.path.normpath('src/assets/original_photos_backup')
IMAGES_DIR = os.path.normpath('src/assets/images')
THUMBS_DIR = os.path.normpath('src/assets/thumbnails')

os.makedirs(THUMBS_DIR, exist_ok=True)

processed = 0
total_orig_size = 0
total_full_size = 0
total_thumb_size = 0

for root, dirs, files in os.walk(BACKUP_DIR):
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext not in ['.jpg', '.jpeg', '.png', '.webp']:
            continue
        
        orig_path = os.path.join(root, f)
        rel_path = os.path.relpath(orig_path, BACKUP_DIR)
        
        full_dest = os.path.join(IMAGES_DIR, rel_path)
        thumb_dest = os.path.join(THUMBS_DIR, rel_path)
        
        os.makedirs(os.path.dirname(full_dest), exist_ok=True)
        os.makedirs(os.path.dirname(thumb_dest), exist_ok=True)
        
        orig_size = os.path.getsize(orig_path)
        total_orig_size += orig_size
        
        with Image.open(orig_path) as img:
            # Transpose according to EXIF orientation
            img = ImageOps.exif_transpose(img)
            
            # 1. Full web resolution (max 1600px)
            img_full = img.copy()
            if img_full.width > 1600 or img_full.height > 1600:
                img_full.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            
            if ext == '.png' and img_full.mode == 'RGBA':
                img_full.save(full_dest, 'PNG', optimize=True)
            else:
                if img_full.mode in ('RGBA', 'P'):
                    img_full = img_full.convert('RGB')
                img_full.save(full_dest, 'JPEG', quality=85, optimize=True)
            
            # 2. Thumbnail resolution (max 600px)
            img_thumb = img.copy()
            if img_thumb.width > 600 or img_thumb.height > 600:
                img_thumb.thumbnail((600, 600), Image.Resampling.LANCZOS)
            
            if ext == '.png' and img_thumb.mode == 'RGBA':
                img_thumb.save(thumb_dest, 'PNG', optimize=True)
            else:
                if img_thumb.mode in ('RGBA', 'P'):
                    img_thumb = img_thumb.convert('RGB')
                img_thumb.save(thumb_dest, 'JPEG', quality=80, optimize=True)
        
        full_size = os.path.getsize(full_dest)
        thumb_size = os.path.getsize(thumb_dest)
        total_full_size += full_size
        total_thumb_size += thumb_size
        processed += 1
        print(f"Processed [{processed}]: {f} -> Full: {full_size//1024}KB, Thumb: {thumb_size//1024}KB")

print("="*60)
print(f"Total images processed: {processed}")
print(f"Original total size:   {total_orig_size / 1024 / 1024:.2f} MB")
print(f"Web 1600px total size: {total_full_size / 1024 / 1024:.2f} MB ({(1 - total_full_size/total_orig_size)*100:.1f}% reduction)")
print(f"Thumbnails total size: {total_thumb_size / 1024 / 1024:.2f} MB ({(1 - total_thumb_size/total_orig_size)*100:.1f}% reduction)")

