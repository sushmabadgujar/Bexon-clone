

// export const buildFormData = (data, formData = new FormData()) => {
//   Object.entries(data).forEach(([key, value]) => {
//     if (value === null || value === undefined) {
//       return;
//     }

//     if (
//       typeof value === "object" &&
//       !(value instanceof File)
//     ) {
//       formData.append(key, JSON.stringify(value));
//     } else {
//       formData.append(key, value);
//     }
//   });

//   return formData;
// };

export const buildFormData = (data, formData = new FormData()) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    // Multiple files
    if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) {
      value.forEach((file) => {
        formData.append(key, file);
      });
    }
    // Single file
    else if (value instanceof File) {
      formData.append(key, value);
    }
    // Object / Array
    else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    }
    // Primitive values
    else {
      formData.append(key, value);
    }
  });

  return formData;
};