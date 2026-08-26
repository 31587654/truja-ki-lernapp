# Truja AI Academy

Eine lokale, responsive Progressive Web App für Joachim Schledt. Die Lernplattform kombiniert Active Recall, Spaced Repetition, Retrieval Practice, Micro Learning, Interleaving, adaptive Schwierigkeit und Learning by Doing.

## Funktionsumfang

- 3 Lernstufen, 18 Kapitel, 108 Fragen und 36 Lernkarten
- Fragetypen: Multiple Choice, Wahr/Falsch, Zuordnung, Praxis und Situation
- Spaced Repetition: sofort, 1, 3, 7, 14, 30 und 90 Tage
- Dashboard: Wissensgrad, Erfolgsquote, Lernzeit, Kapitel-, Prüfungs- und Wiederholungsstatus
- XP, Level, Lernserie und Tagesziel
- Kapitelprüfung 10, Modulprüfung 30, Abschlussprüfung 100 Fragen
- Offline-Tutor auf Basis der lokalen Kurs-Wissensbasis
- 90-/180-Tage-Lernpfad, Skill-Matrix und zwei Entwicklungsroadmaps
- IndexedDB für Lernstand, Local Storage für eine kleine Statuszusammenfassung
- PWA-Service-Worker für Offline-Nutzung nach dem ersten Laden

## Schnellstart

```bash
npm install
npm run dev
```

Danach die von Vite angezeigte lokale Adresse öffnen.

## Production Build

```bash
npm run build
npm run preview
```

Der statische Build liegt in `dist/`.

## Plattformen

- GitHub Codespaces: Repository öffnen, anschließend `npm install && npm run dev`.
- Replit: als Node/Vite-Projekt importieren, Run-Befehl `npm run dev`.
- Cursor: Ordner öffnen, Terminal starten, dann Schnellstart ausführen.
- Bolt.new, Lovable: Projektdateien importieren. Beide Plattformen können den vorhandenen Vite/React-Aufbau lesen; die konkrete Importfunktion hängt vom jeweiligen Dienst ab.

## Installation als PWA

1. Production Build über HTTPS bereitstellen oder lokal über `npm run dev` testen.
2. Im Browser „Zum Startbildschirm“ oder „App installieren“ wählen.
3. Auf iPhone/iPad: Safari > Teilen > Zum Home-Bildschirm.

## Deployment

Das Projekt ist rein statisch. Das Verzeichnis `dist/` kann auf GitHub Pages, Azure Static Web Apps, Netlify, Vercel oder einem beliebigen HTTPS-Webspace veröffentlicht werden. Bei Unterpfad-Hosting muss in `vite.config.ts` gegebenenfalls `base` gesetzt werden.

## Datenschutz und KI-Tutor

Die PWA sendet keine Lernstände an einen Server. Der „KI-Tutor“ ist absichtlich ein lokaler Wissensassistent: Er durchsucht die eingebauten Lerninhalte und formuliert daraus eine fest strukturierte Antwort. Ohne Server oder externe Modell-API ist kein generativer LLM-Tutor möglich. Eine optionale Erweiterung ist in `docs/ERWEITERUNGSKONZEPT.md` beschrieben.
