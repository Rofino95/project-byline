---
title: "Wenn KI anfängt zu handeln"
description: Was KI-Agenten von Chatbots wirklich unterscheidet.
date: "2026-06-10"
category: "technik-wissenschaft"
author: "RZ"
featured: false
---

## Derselbe Auftrag, grundverschiedene Reaktion

Angenommen, jemand bittet ein KI-System darum, Informationen über ein Unternehmen zusammenzustellen. Ein reiner Chatbot ohne Werkzeugzugriff antwortet innerhalb des Gesprächsraums. Ein Agent hingegen öffnet einen Browser, sucht auf mehreren Webseiten, liest Dokumente, vergleicht Informationen und legt ein fertiges Dokument ab. Je nach Berechtigung auch ohne Rückfrage. Und ohne dass jemand jeden Einzelschritt vorgibt.

Das ist kein Unterschied im Grad. Es ist ein Unterschied in der Art.

## Antworten versus Handeln

Ein klassischer Chatbot, so fortgeschritten er auch sein mag, ist reaktiv. Er erhält eine Eingabe und produziert eine Ausgabe. Das Gespräch selbst hat keine Konsequenzen außerhalb des Chatfensters. Was immer der Nutzer mit der Antwort macht, ist seine Sache.

Ein KI-Agent folgt einer anderen Logik. Er verfolgt ein Ziel und nimmt dafür Handlungen in der Welt vor. Er kann Dateien lesen und schreiben, Webseiten aufrufen, Code ausführen, APIs ansprechen, E-Mails verschicken oder Kalendereinträge anlegen. Entscheidend ist dabei, dass er diese Schritte nicht auf direkte Anweisung durchführt, sondern sie selbst plant und sequenziert. Er bestimmt, welche Werkzeuge er in welcher Reihenfolge einsetzt, um ein vorgegebenes Ergebnis zu erreichen.

Diese Eigenschaft nennt sich in der Forschung Autonomie – nicht im philosophischen Sinne, sondern im technischen: der Agent entscheidet selbst über seinen nächsten Schritt.

## Die Schleife, die alles verändert

Was einen Agenten technisch ausmacht, lässt sich mit einem einfachen Schema beschreiben: Wahrnehmen, Planen, Handeln, Beobachten – und von vorn. Der Agent nimmt einen Zustand wahr, überlegt, was als Nächstes sinnvoll ist, führt eine Aktion aus, registriert das Ergebnis und passt sein weiteres Vorgehen an.

Diese Schleife ist alt. Sie findet sich in der KI-Forschung schon seit Jahrzehnten, in Robotersystemen, in Spieleagenten, in industriellen Steuerungsprogrammen. Was sich verändert hat, ist der Kern dieser Schleife. Heute sitzen dort Sprachmodelle, die in natürlicher Sprache kommunizieren, Pläne formulieren und Situationen einschätzen können, die früher umfangreiche Regelwerke erfordert hätten.

Der Unterschied ist erheblich. Viele klassische Workflow-Systeme folgen vordefinierten Pfaden und sind bei unerwarteten Fällen weniger flexibel. Ein sprachmodellbasierter Agent kann improvisieren, Alternativen formulieren und auf Hindernisse flexibel reagieren – zumindest innerhalb der Grenzen dessen, was sein Modell verstehen kann.

## Werkzeuge und Gedächtnis als Voraussetzung

Damit ein Agent überhaupt handeln kann, braucht er zwei Dinge: Werkzeuge und Gedächtnis.

Werkzeuge sind Schnittstellen zur Außenwelt. Sie erlauben dem Agenten, Code auszuführen, Datenbanken abzufragen, externe Dienste anzusprechen oder Dateien zu lesen. Ohne Werkzeuge ist auch ein Sprachmodell auf Text beschränkt. Mit ihnen kann dasselbe Modell plötzlich Aufgaben erledigen, die vorher Menschen erfordert hätten.

Gedächtnis ist ebenso zentral, aber komplexer. Sprachmodelle selbst haben kein persistentes Gedächtnis. Ohne externe Speicher- oder Kontextmechanismen beginnt jede Anfrage technisch weitgehend von vorn. Agentensysteme umgehen das durch verschiedene Mechanismen: Sie speichern den Verlauf vorheriger Schritte im Kontext, schreiben Zwischenergebnisse in externe Speicher oder übergeben relevante Informationen strukturiert von Schritt zu Schritt. Das ermöglicht auch längere Aufgaben, die sich über viele einzelne Handlungen erstrecken.

Beides zusammen, Werkzeuge und Gedächtnis, ist die Infrastruktur, die aus einem Sprachmodell einen handelnden Agenten macht. Das Modell selbst liefert das Urteilsvermögen. Die Umgebung liefert die Handlungsfähigkeit.

## Wo das heute schon angekommen ist

KI-Agenten sind längst kein Laborkonzept mehr. Programmierwerkzeuge führen selbstständig Codeänderungen durch, schreiben Tests, erkennen Fehler und korrigieren sie. Rechercheagenten durchsuchen Dokumente, verdichten Inhalte und erstellen strukturierte Berichte. In einigen Unternehmen übernehmen Agenten Teile des Kundenservice, der Datenpflege oder der internen Koordination.

Dabei gilt: Die meisten dieser Systeme sind keine vollständig autonomen Einheiten, die ohne menschliche Kontrolle agieren. Sie sind eher spezialisierte Helfer mit definierten Handlungsspielräumen, die für bestimmte Aufgaben gebaut wurden und in genau diesem Kontext gut funktionieren. Sobald die Aufgabe außerhalb ihres Trainingsbereichs liegt oder Situationen auftreten, die nicht antizipiert wurden, nehmen Fehler schnell zu.

## Was dabei schwieriger wird

Mit der Autonomie wächst auch das Problem der Nachvollziehbarkeit. Wenn ein Chatbot eine falsche Antwort gibt, bleibt der Schaden meist auf die Antwort begrenzt. Bei einem Agenten kann derselbe Fehler weitere Handlungen nach sich ziehen. Wenn ein Agent eine mehrstufige Aufgabe ausführt und dabei einen frühen Fehler macht, der sich durch alle Folgeschritte zieht, wird der Ursprung des Problems schwer zu rekonstruieren. Die Kette von Entscheidungen, die zu einem Ergebnis geführt hat, ist oft nicht transparent.

Dazu kommt: Ein Agent, der Werkzeuge nutzt, hinterlässt Spuren. Er verschickt E-Mails, ändert Dateien, ruft externe Dienste auf. Fehler haben hier keine rein textlichen Folgen mehr. Sie können reale Auswirkungen haben.

Viele Systeme begegnen dem mit sogenannten Human-in-the-Loop-Mechanismen: An bestimmten Punkten pausiert der Agent und fragt nach Bestätigung. Das macht die Systeme sicherer, löst aber das grundlegende Problem nicht. Je mehr Entscheidungen delegiert werden, desto schwieriger wird es, den Überblick zu behalten – selbst wenn an jeder kritischen Stelle jemand zustimmt.

## Die Frage nach dem „Agent"

Der Begriff selbst verdient Skepsis. In der Marketingsprache heißt inzwischen fast jede automatisierte KI-Funktion Agent, egal ob dahinter tatsächlich ein autonomes Planungssystem steckt oder nur ein etwas komplexerer Chatbot mit zwei vordefinierten Aktionen. Die Bezeichnung ist unscharf geworden.

Das ist nicht nur ein semantisches Problem. Wer ein System als Agenten bewirbt, suggeriert ein Maß an Selbstständigkeit und Zuverlässigkeit, das viele aktuelle Systeme nicht konsistent liefern. Das erzeugt falsche Erwartungen und kann dazu führen, dass Aufgaben delegiert werden, die noch nicht wirklich delegierbar sind.

Ob etwas ein Agent ist oder nicht, hängt weniger am Namen als an drei Fragen: Verfolgt das System eigenständig ein Ziel über mehrere Schritte? Nutzt es dabei Werkzeuge, um in einer Umgebung zu handeln? Reagiert es auf Feedback und passt sein Vorgehen an? Je mehr davon zutrifft, desto mehr rechtfertigt die Bezeichnung.

## Autonomie als Verschiebung, nicht als Endpunkt

Was KI-Agenten von Chatbots trennt, ist am Ende keine technische Kleinigkeit. Es ist eine Verschiebung der Frage, die man an ein System stellt. Statt „Was ist die Antwort auf meine Frage?" lautet sie: „Kannst du dieses Problem für mich lösen?"

Diese Verschiebung hat Konsequenzen, die über Produktivitätsgewinne hinausgehen. Sie verändert, wie viel Kontrolle man behält, wer für Ergebnisse verantwortlich ist, und was es bedeutet, einer Software zu vertrauen. Die spannendste offene Frage ist nicht, wie leistungsfähig Agenten werden. Sie ist, wie man mit dem umgeht, was entsteht, wenn man aufhört, jeden Schritt selbst zu gehen.