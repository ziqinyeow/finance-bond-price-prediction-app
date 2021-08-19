const { BlobServiceClient } = require("@azure/storage-blob");

const storageAccountName = process.env.STORAGE_ACC_NAME;
const sasToken = process.env.SAS_TOKEN;
const containerName = process.env.NEXT_PUBLIC_CONTAINER_NAME;
const blobSasUrl = process.env.BLOB_SAS_URL;

// const blobSasUrl = process.env.BLOB_SAS_URL;
// const blobServiceClient = new BlobServiceClient(blobSasUrl);

export const uploadFiles = async (files) => {
  const containerName = process.env.CONTAINER_NAME;
  const blobSasUrl = process.env.BLOB_SAS_URL;
  const blobServiceClient = new BlobServiceClient(blobSasUrl);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  try {
    const promises = [];
    for (const file of files) {
      const blockBlobClient = containerClient.getBlockBlobClient(file.name);
      promises.push(blockBlobClient.uploadBrowserData(file));
    }
    await Promise.all(promises);
    // test one file
    // const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    // blockBlobClient.uploadData(file);

    // listFiles();
  } catch (error) {
    console.log(error);
  }
};

export const listFiles = async () => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const fileName = [];
  try {
    let iter = containerClient.listBlobsFlat();
    let blobItem = await iter.next();
    while (!blobItem.done) {
      fileName.push(blobItem.value.name);
      blobItem = await iter.next();
    }
    return fileName;
  } catch (error) {
    console.log(error);
  }

  // const blobServiceClient = new BlobServiceClient(
  //   `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  // );
  // const containerClient = blobServiceClient.getContainerClient(containerName);

  // const returnedBlobUrls = [];

  // for await (const blob of containerClient.listBlobsFlat()) {
  //   returnedBlobUrls.push(
  //     `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
  //   );
  // }

  // return returnedBlobUrls;
  // try {
  // } catch (err) {
  //   // console.log(err);
  // }
};

// export const deleteFiles = async () => {
//   try {
//     for (const option of fileList.selectedOptions) {
//       await containerClient.deleteBlob(option.text);
//     }
//     //   listFiles();
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createContainer = async (containerName) => {
  try {
    await containerClient.create();
  } catch (error) {}
};

export const deleteContainer = async () => {
  try {
    await containerClient.delete();
  } catch (error) {}
};
