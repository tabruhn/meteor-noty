Package.describe({
  summary:"noty 2.2.4"
});

Package.on_use(function(api){
  api.use('jquery','client');
  api.add_files('noty-2.2.4.js','client');
});

