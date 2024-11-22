import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import UserIcon from "../../../assets/img/Icon1.svg"

const SectionCard = () => {
    return (

        <div className="flex justify-between gap-10 align-middle items-center">
            <Card sx={{ paddingY: "20px", paddingX: "30px" }}>
                <div className="flex justify-center">
                    <CardMedia image={UserIcon} sx={{ height: 56, width: 56 }} title="green iguana" />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center" component="div">Easy To Work In a Team</Typography>
                    <Typography variant="body2" color="text.secondary" align="center">I really like working in a team because when I work in a team the work feels easier</Typography>
                </CardContent>
            </Card>
            <Card sx={{ paddingY: "20px", paddingX: "30px" }}>
                <div className="flex justify-center">
                    <CardMedia image={UserIcon} sx={{ height: 56, width: 56 }} title="green iguana" />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center" component="div">Easy To Work In a Team</Typography>
                    <Typography variant="body2" color="text.secondary" align="center">I really like working in a team because when I work in a team the work feels easier</Typography>
                </CardContent>
            </Card>
            <Card sx={{ paddingY: "20px", paddingX: "30px" }}>
                <div className="flex justify-center">
                    <CardMedia image={UserIcon} sx={{ height: 56, width: 56 }} title="green iguana" />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center" component="div">Easy To Work In a Team</Typography>
                    <Typography variant="body2" color="text.secondary" align="center">I really like working in a team because when I work in a team the work feels easier</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default SectionCard