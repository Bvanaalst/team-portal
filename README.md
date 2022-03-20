### Ga naar de team-portal/api folder

cd team-porta/api

### (optional) Maak een virtual environment

python -m venv env

### (optional) Activate virtual environment

## On Windows use

env\Scripts\activate

### In linux use

source env/bin/activate

### Install docker and after that, run docker compose

docker-compose up -d

### Exporteer SKC database

1. Ga naar https://www.skcvolleybal.nl/phpMyAdmin/
2. Log in
3. Selecteer `deb105013n2_SKC` in de linker kolom
4. Klik op `Exporteren`

- Export methode: `Uitgebreid`
- Zet vinkje bij `CREATE DATABASE / USE statement toevoegen`

5. Klik rechts onderin op `Starten`

### Importeer de geexporteerde database

1. Ga naar http://localhost:8888
2. Log in
3. Klik op `Importeren`
4. selecteer gedownloade bestande `deb105013n2_SKC.sql`
5. Klik rechts onderin op `Starten`

### Create database in your local

1. Ga naar http://localhost:8888
2. Klik op `SQL`
3. run `CREATE DATABASE deb105013n2_team_portal CHARACTER SET utf8;`

### Run django migrations

1. Ga naar de api map: `cd team-portal\api`
2. Run migrations: `python manage.py migrate`
3. Check of je tabellen hebt in de database `deb105013n2_team_portal`

### Maak superuser account aan

1. Ga naar de api map: `cd team-portal\api`
2. Run migrations: `python manage.py createsuperuser`
3. Doorloop stappen
4. Controleer of tabel `deb105013n2_team_portal.auth_user` 1 record heeft
