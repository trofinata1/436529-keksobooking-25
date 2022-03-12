const removeBlockBySrc = (block) => {
  if (block.src.includes('undefined')) {
    block.remove();
  }
};

const removeBlockByTextContent = (block) => {
  if (block.textContent.includes('undefined')) {
    block.remove();
  }
};

export {removeBlockBySrc, removeBlockByTextContent};
