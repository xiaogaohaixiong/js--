const imports = ()=> {
    let importElId = 'sxslrb_import_file_el'
    let lastEl = document.getElementById('importElId')
    if (lastEl) document.body.removeChild(lastEl)

    let importEl = document.createElement('input')
    importEl.id = importElId
    importEl.style.display = 'none'
    importEl.type = 'file'
    importEl.onchange = (e) => {
      let file = e.target.files[0]
      this.tableLoading = true;
      let impObj =moment(this.yearImport).format("YYYY")
      trainingSettingApi.exportSheetTemplate(file,impObj)
        .then(res => {
          message.success('导入成功')
          this.onload()
        }, err => this.tableLoading = false)

      document.body.removeChild(importEl)
    }
    document.body.appendChild(importEl)
    importEl.click()
  }