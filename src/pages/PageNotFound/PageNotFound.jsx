import { Box } from '@mui/material'
import './PageNotFound.css'

function PageNotFound() {
    return (
        <Box>
            <div class="number">404</div>
            <div class="text"><span>Ooops...</span><br />page not found</div>
            <a class="me" href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" target="_blank"></a>
        </Box>
    )
}

export default PageNotFound