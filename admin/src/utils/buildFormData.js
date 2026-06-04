

export const buildFormData = (data, formData = new FormData()) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return;
    }

    if (
      typeof value === "object" &&
      !(value instanceof File)
    ) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};