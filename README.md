# Proyecto DRF + React

Plantilla inicial para un proyecto con backend en Django + Django REST Framework y frontend en React (Vite) usando Tailwind + DaisyUI.

Estructura creada:

- backend/  -> proyecto Django + DRF (configuración mínima, app `health` con endpoint de salud)
- frontend/ -> app React con Vite, Tailwind y DaisyUI, ejemplo de llamada al endpoint de salud

Siguientes pasos (Windows PowerShell):

Backend:

1. cd backend
2. python -m venv .venv; .\.venv\Scripts\Activate
3. pip install -r requirements.txt
4. python manage.py migrate
5. python manage.py runserver

Frontend:

1. cd frontend
2. npm install
3. npm run dev

Notas: DaisyUI es una buena opción si quieres componentes rápidos estilo Tailwind sin construirlos desde cero. Es ligera y encaja bien con proyectos que usan Tailwind; si necesitas componentes altamente personalizados o un diseño corporativo muy específico, quizá prefieras una librería con más componentes pre-hechos (por ejemplo Material UI). Para una app que tendrá web, móvil y wearable, DaisyUI + Tailwind facilita crear interfaces responsivas y pequeñas.
