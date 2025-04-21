# Proyecto Docker - MariaDB

Este proyecto contiene una configuración mínima de Docker para ejecutar un contenedor MariaDB con datos persistentes y scripts de inicialización.

## 📦 Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Archivo `.env` configurado (ya proporcionado en este repositorio)

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ya incluido por defecto):

```env
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=www
MYSQL_USER=www
MYSQL_PASSWORD=www
MYSQL_PORT=3306
```

## 🚀 Iniciar el contenedor

Desde la raíz del proyecto, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará un contenedor MariaDB accesible desde `localhost:3306` (si tienes expuesto el puerto).

## 🗃️ Scripts de inicialización

Los scripts `.sql` ubicados en la carpeta `db_sql/` se ejecutarán automáticamente la primera vez que el contenedor se levante.

## 🛑 Detener y eliminar contenedores

Para detener y eliminar los contenedores, ejecuta:

```bash
docker-compose down
```

## 💡 Notas

- Si no necesitas acceder desde el exterior, puedes eliminar o comentar la línea de `ports` en `docker-compose.yml`.
- La base de datos se mantiene persistente gracias al volumen `mysql-volume`.

## 🧹 Limpiar volúmenes

Para eliminar el volumen asociado, ejecuta:

```bash
docker volume rm nombre_del_volumen
```

En este proyecto, sería:

```bash
docker volume rm tests_mysql-volume
```