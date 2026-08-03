import os

PENDING_DIR = os.path.join("assets", "images", "real", "pending")

if __name__ == "__main__":
    if not os.path.isdir(PENDING_DIR):
        print(f"Directory not found: {PENDING_DIR}")
    else:
        for filename in sorted(os.listdir(PENDING_DIR)):
            print(filename)
