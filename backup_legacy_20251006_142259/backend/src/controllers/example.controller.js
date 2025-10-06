// Example controller functions

export const exampleController = {
  getAll: (req, res) => {
    // Add your logic here
    res.json({ message: 'Get all items' });
  },

  getById: (req, res) => {
    const { id } = req.params;
    // Add your logic here
    res.json({ message: `Get item with id: ${id}` });
  },

  create: (req, res) => {
    // Add your logic here
    res.json({ message: 'Create new item' });
  },

  update: (req, res) => {
    const { id } = req.params;
    // Add your logic here
    res.json({ message: `Update item with id: ${id}` });
  },

  delete: (req, res) => {
    const { id } = req.params;
    // Add your logic here
    res.json({ message: `Delete item with id: ${id}` });
  }
};
