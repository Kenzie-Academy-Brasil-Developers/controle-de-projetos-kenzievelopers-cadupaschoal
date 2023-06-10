import handleError from "./handleErrors.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import verifyIdExists from "./verifyIdExists.middleware";
import verifyInfosExists from "./verifyInfosExists.middleware";
import verifyPreferredOS from "./verifyPreferredOS.middleware";


export default { handleError, uniqueEmail, verifyIdExists, verifyInfosExists, verifyPreferredOS };