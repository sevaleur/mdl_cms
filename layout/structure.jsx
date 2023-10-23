import { BsFillDatabaseFill } from "react-icons/bs"
import { BiSolidNavigation } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { SiAboutdotme } from "react-icons/si"
import { PiLinkSimpleBold } from "react-icons/pi"
import { MdPhotoCamera } from "react-icons/md"
import { RiAdvertisementFill } from "react-icons/ri"
import { PiFilmSlateFill } from "react-icons/pi"

export const structure = (S) => 
  S.list()
    .title("itsforgotham CMS")
    .items([
      S.listItem(
        { 
          icon: BsFillDatabaseFill 
        }
      )
        .title('Metadata')
        .child(
          S.document()
            .schemaType('metadata')
            .documentId('metadata')
        ),
      S.listItem(
        { 
          icon: BiSolidNavigation 
        }
      )
        .title('Navigation')
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
        ),
      S.listItem(
        { 
          icon: AiFillHome 
        }
      )
        .title('Home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
      ),
      S.listItem(
        { 
          icon: SiAboutdotme 
        }
      )
        .title('About')
        .child(
      S.document()
        .schemaType('about')
        .documentId('about')
      ),
      S.listItem(
        { 
          icon: PiLinkSimpleBold 
        }
      )
        .title('Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
      ),
      S.listItem(
        { 
          icon: MdPhotoCamera 
        }
      )
        .title('Commercial Photography')
        .child(
          S.documentList()
            .title("Galleries")
            .filter('_type == "gallery"')
      ),
      S.listItem(
        { 
          icon: RiAdvertisementFill 
        }
      )
        .title('Advertising')
        .child(
          S.documentList()
            .title("Adverts")
            .filter('_type == "advert"')
      ),
      S.listItem(
        { 
          icon: PiFilmSlateFill 
        }
      )
        .title('Short Films')
        .child(
          S.documentList()
            .title("Films")
            .filter('_type == "film"')
    ),
  ])