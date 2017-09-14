export default {
  connection: null,

  close: function() {
    if (this.connection) {
       this.connection.close();
       this.connection = null;
    }
  }
};
