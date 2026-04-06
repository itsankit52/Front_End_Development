const { exec } = require('child_process');

// Open WhatsApp Desktop App
exec('start whatsapp', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("WhatsApp opened");
});