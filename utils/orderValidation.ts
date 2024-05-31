import * as Yup from 'yup'

export const orderValidationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
    origin: Yup.string().required().label("Origin"),
    destination: Yup.string().required().label("Destination"),
    description: Yup.string().required().label("Description"),
    distance: Yup.string().required().label("Distance"),
  orderPhotoUrl: Yup.string().required().label("Image"),
 
});