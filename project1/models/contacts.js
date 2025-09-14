module.exports = (mongoose) => {
  const Contacts = mongoose.model(
    'contacts',
    mongoose.Schema(
      {
       firstName: String,
       lastName: String,
       email: String,
       favoriteColor: String,
       birthday: Date
      },
      { timestamps: true }
    )
  );

  return Contacts;
};

