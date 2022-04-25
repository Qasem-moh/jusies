export function PatinatsModule(
  id,
  idN,
  name,
  age,
  isSaved,
  isVaccin,
  state,
  Weight,
  heart,
  boold,
  Category
) {
  // ID_Patinat	Patinat	Patinat_ID	Age	saved	Vaccin	state	Confirm	Delete
  this.id = id;
  this.idN = idN;
  this.name = name;
  this.age = age;
  this.isSaved = isSaved;
  this.isVaccin = isVaccin;
  this.state = state;
  this.Weight = Weight;
  this.heart = heart;
  this.boold = boold;
  this.Category = Category;
}
