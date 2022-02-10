const downloadFile = (file: File, fileName: string) => {
  const url = window.URL.createObjectURL(new Blob([file]));

  const link = document.createElement("a");

  link.href = url;
  link.setAttribute("download", fileName);

  document.body.appendChild(link);

  link.click();
  link.remove();
};

export { downloadFile };
