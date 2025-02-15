const picturesContainerElement = document.querySelector('.pictures');

const renderPhotos = (photos) => {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const picturesFragment = document.createDocumentFragment();

  photos.forEach(({ id, url, description, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    const pictureImgElement = picture.querySelector('.picture__img');

    picture.id = id;
    pictureImgElement.src = url;
    pictureImgElement.alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.append(picture);
  });

  picturesContainerElement.append(picturesFragment);
};

const clearPhotos = () => {
  const childrenToRemove = picturesContainerElement.querySelectorAll('.picture');
  childrenToRemove.forEach((child) => child.remove());
};

export { renderPhotos, clearPhotos };
