import { Card , Typography} from '@mui/material';
import { Box } from '@mui/system';
import react from 'react'
import { CategoryTileProps } from '../../helpers/interfaces';

const CategoryTile :React.FC<CategoryTileProps> = ({category, image}) => {

    return (
        <Card sx={{display:"inline-block", width:"calc(24% - 1px)", mx:".5%", height:"45vh" }}>

            <Typography variant="h2" align="center" sx={{fontSize:"1.5rem"}}
            >{category.toUpperCase()}</Typography>
            <Box component="img" alt={category} src={image} 
            sx = {{width:"50%", display:"block", mx:"auto"}}/>

        </Card>
    )
}

export default CategoryTile;

// Komponent przyjmuje 2 propsy: category(string), image (string), . Stwórz odpowiedni interface i otypuj komponent i propsy
// 2. JSX: 
// Wszystko owinięte Card z MUI, sx: display inline-block, width: calc (24%-1px), mx 0.5%, height 45vh
// calc służy do obliczana odległości między jednostakmi, gdyby zdjęcia zajmowały 100% to przeszłyby do nowej linii, dlatego odejmujemy 1px
// W środku Card :
// Typography variant h2, align center, sx fontSize: 1.5rem, textContent category (props) pisana capslockiem
// Box (MUI) component img, alt category, src image (props), sx: width: 50%, display: block, mx auto
