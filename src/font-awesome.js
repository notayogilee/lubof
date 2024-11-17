import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faHome,
  faPeopleGroup,
  faEye,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons"; // Import icons you need
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faPeopleGroup, faEye, faHandHoldingHeart); // Add icons to the library

export default FontAwesomeIcon;
