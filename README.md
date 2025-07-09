# Aplikacja pogodowa "isCloudy"

Aplikacja React z renderowaniem po stronie serwera (SSR) zbudowana z Vite, Express i TypeScript + Tailwind / shadcn.

## Wstępne Wymagania

### Wersja Node.js

Aplikacja wymaga **Node.js w wersji 18.20.0 lub wyższej** (lub Node.js 20.10.0+).

Sprawdź swoją wersję Node.js:

```bash
node --version
```

Jeśli potrzebujesz aktualizacji Node.js:

- Pobierz najnowszą wersję LTS z [nodejs.org](https://nodejs.org/)
- Lub użyj menedżera wersji takiego jak [nvm](https://github.com/nvm-sh/nvm)

### Menedżer pakietów

Potrzebujesz npm (dostarczany z Node.js) lub dowolny kompatybilny menedżer pakietów.

## Instalacja

1. **Sklonuj repozytorium** (lub pobierz pliki projektu)

   ```bash
   git clone https://github.com/Cloudyaa/is-cloudy-weather-app.git
   cd is-cloudy-weather-app
   ```

2. **Stwórz plik ze zmiennymi środowiskowymi**

   ```bash
   copy example.env .env
   ```
   
3. **Uruchom środowisko lokalne**

   ```bash
   npm run start
   ```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000)

### Inne dostępne komendy

```bash
# Uruchom aplikację
npm run dev:local

# Zbuduj aplikację
npm run build

# Uruchom linting
npm run lint

# Podgląd zbudowanej aplikacji
npm run preview

# Sformatuj kod
npm run format

# Dodaj komponenty Shadcn/UI
npm run ui:add
```

## Struktura projektu

```
is-cloudy-weather-app/
├── api/
│   └── server.ts           # Serwer Express z SSR
├── src/
│   ├── entry-server.tsx    # Punkt wejścia po stronie serwera
│   └── ...                 # Inne pliki źródłowe
├── dev.ts                  # Plik uruchomieniowy lokalny serwer
├── index.html              # Szablon HTML
├── package.json
└── README.md
└── ...
```

## Stack technologiczny

- **Frontend**: React 19, TypeScript, Tailwind 4, shadcn/ui
- **Zarządzanie stanem**: Redux 9
- **Routing**: React Router 7
- **Narzędzie budowania**: Vite 7
- **Serwer**: Express 5, SSR (renderowanie po stronie serwera)
- **Środowisko uruchomieniowe**: Node.js z tsx do wykonywania TypeScript

## Rozwiązywanie problemów

### Częste problemy

1. **Błąd "crypto.hash is not a function"**
   - Twoja wersja Node.js jest zbyt stara
   - Zaktualizuj do Node.js 18.20+ lub 20.10+

2. **Błędy "Cannot find module"**
   - Upewnij się, że wszystkie zależności są zainstalowane: `npm install`
   - Usuń `node_modules` i `package-lock.json`, następnie przeinstaluj

3. **Port 3000 jest już używany**
   - Zabij proces używający portu 3000, lub zmień port w `dev.ts`

4. **Błędy kompilacji TypeScript**
   - Upewnij się, że używasz poprawnej wersji Node.js
   - Spróbuj: `npm install tsx@latest`

### Wymagania systemowe

- **Node.js**: 18.20.0+ lub 20.10.0+
- **npm**: 8.0.0+
- **System operacyjny**: Windows, macOS lub Linux

### Zarządzanie wersjami Node.js

Jeśli musisz zarządzać wieloma wersjami Node.js:

**Używając nvm (macOS/Linux):**

```bash
# Zainstaluj i użyj Node.js 20.18.0
nvm install 20.18.0
nvm use 20.18.0
```

**Używając nvm-windows (Windows):**

```bash
# Najpierw zainstaluj nvm-windows, następnie:
nvm install 20.18.0
nvm use 20.18.0
```

## Wsparcie

Jeśli napotkasz jakiekolwiek problemy:

1. Upewnij się, że twoja wersja Node.js spełnia wymagania
2. Spróbuj usunąć `node_modules` i przeinstalować zależności
3. Sprawdź, czy wszystkie wymagane pliki są obecne w katalogu projektu

---

**Autor**: Cloudyaa - Klaudia Gadzinska  
**Wersja**: 0.0.1
