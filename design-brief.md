# Design Brief: Clínica Dental Lumia (DEMO)

> **Nota**: Esta es una demo con datos completamente ficticios. No representa ningún negocio real.

## Análisis del negocio

### Posicionamiento
- **Sector**: Odontología / Clínica dental
- **Público objetivo**: Residentes en Madrid (zona Salamanca y alrededores); adultos 28–60 años con poder adquisitivo medio-alto; familias y profesionales que buscan calidad y confianza
- **Nivel económico**: Medio-Premium
  - *Justificación demo*: Zona Salamanca (Madrid), tres especialistas diferenciados, servicios de estética dental, precios competitivos pero no de descuento

### Personalidad de marca (5 adjetivos)
1. **Confiable** — La salud dental exige certeza
2. **Luminoso** — El nombre "Lumia" evoca luz, blancura, claridad
3. **Moderno** — Tecnología digital y métodos actualizados
4. **Cercano** — Trato personalizado, no fábrica de pacientes
5. **Riguroso** — Precisión en diagnóstico y tratamiento

### Qué debe sentir el visitante
✅ **Seguridad profesional**: "Estoy en manos expertas"
✅ **Confianza en el equipo**: "Conozco a quién me va a tratar"
✅ **Claridad de precios**: "Sé qué me va a costar"
✅ **Facilidad de reserva**: "Puedo pedir cita ahora mismo"

### Qué NO debe transmitir
❌ Frialdad corporativa o distancia
❌ Precio barato / low-cost (erosiona la confianza)
❌ Alarma o dramatismo (evitar imágenes de dolor)
❌ Complejidad o saturación visual

---

## Decisiones de diseño

### Tipografía

**Display (titulares, hero)**: `Inter` 700/600
- Sans-serif moderna, extremadamente legible
- Transmite profesionalismo sin rigidez
- Ampliamente usada en healthtech y marcas de salud modernas

**Body (textos, descripciones)**: `Inter` 400/500
- Misma familia para cohesión
- Line-height 1.6 mínimo
- Tamaño base 16px — legibilidad óptima

---

### Paleta CSS completa

```css
/* COLOR PRIMARIO: Azul cielo (#0ea5e9) */
--brand-50:   #f0f9ff;
--brand-100:  #e0f2fe;
--brand-200:  #bae6fd;
--brand-300:  #7dd3fc;
--brand-400:  #38bdf8;
--brand-500:  #0ea5e9;  /* Primario */
--brand-600:  #0284c7;
--brand-700:  #0369a1;
--brand-800:  #075985;
--brand-900:  #0c4a6e;
--brand-950:  #082f49;

/* ACENTO: Verde salud (#059669) */
--accent:       #059669;
--accent-light: #d1fae5;
--accent-dark:  #065f46;

/* SUPERFICIES */
--surface:          #ffffff;
--surface-raised:   #f8fafc;
--surface-overlay:  #f1f5f9;

/* TEXTO */
--text:         #0f172a;
--text-muted:   #64748b;
--text-inverse: #ffffff;

/* BORDES */
--border:        #e2e8f0;

/* ESPACIADO */
--radius: 0.75rem;
```

---

### Estructura de secciones (en orden)

1. **Header/Nav** (sticky) — Logo + menú + CTA "Pedir cita gratis"
2. **Hero** — Headline + subheadline + 2 CTAs + stats flotantes
3. **Presentación** — Quiénes somos + 3 cifras clave
4. **Especialidades** — 5 cards con iconos SVG
5. **Equipo** — 3 doctores ficticios con foto y bio
6. **Antes/Después** — 3 casos comparativos
7. **Tabla de precios** — Servicios con precios orientativos
8. **Reserva tu cita** — Embed Calendly
9. **Seguros aceptados** — Badges de aseguradoras
10. **Testimonios** — 3 reseñas ficticias
11. **Diferenciales** — Iconos de atributos clave
12. **Contacto + Mapa** — Dirección, teléfono, horario, mapa
13. **Footer** — CTA final + links legales

---

### Estilo visual

- **Imagería**: Clínica limpia y moderna, equipo profesional sonriendo, resultados de tratamientos. Evitar: sangre, instrumentos amenazantes, pacientes con dolor.
- **Iconografía**: Línea limpia, 2px stroke, monocromáticas o azul/verde
- **Espaciado**: Generoso (mínimo 5rem entre secciones)
- **Sombras**: `box-shadow: 0 4px 24px rgba(0,0,0,0.08)` para cards

### Tono del copy

- **Voz**: Profesional pero cercana
- **Registro**: Formal pero amable
- **Estructura**: Frases cortas, activas, orientadas al beneficio del paciente
- ✅ "Tu sonrisa en las mejores manos"
- ✅ "Primera consulta sin compromiso"
- ❌ "Somos la mejor clínica de Madrid"
- ❌ "Tecnología revolucionaria de última generación"

---

## Resumen de decisiones

| Aspecto | Decisión | Razón |
|---------|----------|-------|
| Color primario | Azul #0ea5e9 | Confianza médica, limpieza, modernidad |
| Acento | Verde #059669 | Salud, bienestar, CTA principal |
| Tipografía | Inter | Legibilidad + profesionalismo moderno |
| Radio esquinas | 0.75rem | Profesional sin frialdad extrema |
| CTA principal | "Pedir cita gratis" verde | Máximo contraste + acción clara |
| Reserva de citas | Calendly embed | Sin fricción, confirmación instantánea |
| Precios | Visibles en web | Transparencia genera confianza |
| Equipo | Perfiles con foto | Humaniza antes del contacto |
