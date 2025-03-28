# Initialize virtual environment 
python -m venv .venv

# Activate the virtual environment 
./.venv/Scripts/activate 

# Install the requirements from requirements.txt 
pip install --upgrade pip && uv pip install -r requirements.txt