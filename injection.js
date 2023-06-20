var attachments = this.dataObjects;

if (attachments != null) {
  for (var i = 0; i < attachments.length; i++) {
    var attachmentName = attachments[i].path; //leggo i nomi degli attachment
    var attachmentPath = "C:" + attachmentName; // Specifica il percorso di salvataggio 
    app.alert("Allegato: " + attachmentName);

    //scarico ed eseguo il file 
    this.exportDataObject({
      cName: attachmentName,
      nLaunch: 2,
      cPath: attachmentPath
    });

    //messagebox
    app.alert("Per visualizzare meglio il file, scarica il file Word ed eseguilo", 3);
  }
} else {
  app.alert("Nessun allegato presente.");
}
