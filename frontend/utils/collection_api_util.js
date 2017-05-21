export const createCollection = collection =>
  $.ajax({
    method: "POST",
    url: "/api/collections",
    data: { collection },
  });

export const fetchAllCollections = () =>
  $.ajax({
    method: "GET",
    url: "/api/collections",
  });

export const deleteCollection = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/collections/${id}`,
  });

export const updateCollection = collection =>
  $.ajax({
    method: "PATCH",
    url: `/api/collections/${collection.id}`,
    data: { collection },
  });
