Package.describe({
  summary:"noty 2.2.2"
});

Package.on_use(function(api){
  api.use('jquery','client');
  api.add_files('noty.js','client');
});

