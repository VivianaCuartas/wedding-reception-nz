/* ============================================================
   config.js — Variables globales del proyecto
   Viviana & David — 30.01.2027
   ============================================================
   Edita aquí los datos del evento sin tocar el HTML.
   ---------------------------------------------------------- */

/* Ruta base del proyecto (dejar vacía si está en la raíz) */
var _pathProducto = '';

/* URL del Google Apps Script para recibir confirmaciones */
var _pathApp = 'https://script.google.com/macros/s/AKfycbwLUNNyAAYYT_VoZg6E3PwVX1RT0sKJ5hKB2vjaEB2hxuBNJEHl9dguUaUuWYV8ZyPMfg/exec';

/* Idioma */
var langJs        = 'en';
var langJsVariante = 'en-NZ';
var langDefault   = 'en-NZ';

/* Fecha objetivo para la cuenta regresiva (ISO con zona horaria de Nueva Zelanda, NZDT = UTC+13)
   Así la cuenta es correcta para invitados en cualquier país. */
var fechaCuentaRegresiva = '2027-01-30T12:30:00+13:00';

/* Coordenadas y enlace del lugar de la ceremonia */
var latitudCeremonia   = -43.5350729;
var longitudCeremonia  = 172.6002958;
var linkMapsCeremonia  = 'https://maps.app.goo.gl/YR76L2kwp2rgbQs36';