import { BsFillDatabaseFill } from "react-icons/bs"
import { BiSolidNavigation } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { SiAboutdotme } from "react-icons/si"
import { PiLinkSimpleBold } from "react-icons/pi"
import { MdPhotoCamera } from "react-icons/md"
import { RiAdvertisementFill } from "react-icons/ri"
import { PiFilmSlateFill } from "react-icons/pi"
import { MdPortrait } from "react-icons/md"
import { FaTreeCity } from "react-icons/fa6"
import { TfiGallery } from "react-icons/tfi"
import { TfiMenu} from "react-icons/tfi"
import { RiAdvertisementLine } from "react-icons/ri"
import { PiFilmReelFill } from "react-icons/pi"

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
          icon: MdPortrait
        }
      )
        .title('Portraits')
        .child(
          S.document()
            .schemaType('portraits')
            .documentId('portraits')
      ),
      S.listItem(
        { 
          icon: FaTreeCity
        }
      )
        .title('Still Life')
        .child(
          S.document()
            .schemaType('stillLife')
            .documentId('stillLife')
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
          S.list()
            .title('Commercial Photography')
            .items([
              S.listItem(
                {
                  icon: TfiMenu
                }
              )
              .title('Menu')
              .child(
                S.document()
                  .schemaType('commercial')
                  .documentId('commercial')
              ),
              S.listItem(
                {
                  icon: TfiGallery
                }
              )
                .title("Galleries")
                .child(
                  S.documentList()
                    .title('Galleries')
                    .filter('_type == "gallery"')
                )
            ]
          )
      ),
      S.listItem(
        { 
          icon: RiAdvertisementFill 
        }
      )
        .title('Advertising')
        .child(
          S.list()
          .title('Advertising')
          .items([
            S.listItem(
              {
                icon: TfiMenu
              }
            )
            .title('Menu')
            .child(
              S.document()
                .schemaType('advertising')
                .documentId('advertising')
            ),
            S.listItem(
              {
                icon: RiAdvertisementLine
              }
            )
              .title("Adverts")
              .child(
                S.documentList()
                  .title('Adverts')
                  .filter('_type == "advert"')
              )
          ]
        )
      ),
      S.listItem(
        { 
          icon: PiFilmSlateFill 
        }
      )
        .title('Short Films')
        .child(
          S.list()
          .title('Short Films')
          .items([
            S.listItem(
              {
                icon: TfiMenu
              }
            )
            .title('Menu')
            .child(
              S.document()
                .schemaType('shortFilms')
                .documentId('shortFilms')
            ),
            S.listItem(
              {
                icon: PiFilmReelFill
              }
            )
              .title("Films")
              .child(
                S.documentList()
                  .title('Films')
                  .filter('_type == "film"')
              )
          ]
        )
      ),
  ])