module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'emberwatch',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
