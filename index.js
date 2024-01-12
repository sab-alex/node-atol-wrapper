const w = require('./bindings');
const fptr = new w.Fptr10();
console.log(fptr);
fptr.create();
const settings = fptr.getSettings();
console.log('getSettings', settings);
settings.Port = 2;  // ComPort communication
// settings.ComFile = '/dev/ttyACM0'; //ComPort name
settings.IPPort = 5555;  // ComPort name
settings.IPAddress = '192.168.0.101';
console.log('setSettings', fptr.setSettings(settings));
console.log('isOpened', fptr.isOpened());
console.log('open', fptr.open());

console.log('isOpened', fptr.isOpened());

try {
  console.log('dateTime', fptr.dateTime());
} catch (e) {
  console.log('error', e);
  console.log('close', fptr.close());
}
console.log('close', fptr.close());