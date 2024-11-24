import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPeopleGroup,
  faEye,
  faHandHoldingHeart,
  faInfinity,
  faHandsPraying,
  faHandshake,
  faBookOpen,
  faCircleNodes,
} from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
// import {} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPeopleGroup,
  faEye,
  faHandHoldingHeart,
  faInfinity,
  faHandsPraying,
  faHandshake,
  faBookOpen,
  faCompass,
  faCircleNodes
); // Add icons to the library

export default FontAwesomeIcon;
