# Gestor de Contraseñas Seguro

Proyecto académico para el curso Ética y Seguridad de los Datos.

Aplicación web zero-knowledge: el servidor nunca ve las claves de cifrado.
Toda la criptografía se ejecuta en el navegador con AES-256-GCM, Argon2id y HMAC.

## Funcionalidades principales

- Registro e inicio de sesión seguros (bcrypt/Argon2id)
- Bóveda cifrada de extremo a extremo
- CRUD de entradas (sitio, usuario, contraseña, notas)
- Generador de contraseñas seguras (CSPRNG)
- Indicador de fortaleza
- Sincronización y respaldo local
- Bloqueo automático por inactividad
- Logs de auditoria

## Tecnologías

- **Frontend:** Vanilla JS, HTML5, CSS3, libsodium-wrappers, argon2-browser
- **Backend:**  Node.js, Express, JWT, bcrypt
- **Base de datos:** PostgreSQL (pg)
- **Seguridad:** TLS 1.3 con certificados autofirmados, AES-256-GCM, Argon2id, HKDF

## Estructura del Proyecto

```text
password-manager/
├── public/     # Frontend (HTML, CSS, JS)
├── src/        # Backend (API REST)
├── docs/       # Informe PDF en GitHub Pages
├── certs/      # Certificados TLS (generado localmente, ignorado por Git)
├── schema.sql  # Esquema inicial de la base de datos
├── .gitignore
├── package.json
├── LICENSE
└── README.md   
```
## Informe escrito

Primera entrega disponible en GitHub Pages:
https://santiagouribe269.github.io/password-manager
