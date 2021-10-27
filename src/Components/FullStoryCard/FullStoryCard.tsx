import './FullStoryCard.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const FullStoryCard = ({ story }) => {
  return (
    <article className="full-story-wrapper">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">
            {story.title}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <p>{story.message}</p>
          </Typography>
        </CardContent>
      </Card>
    </article>
  );
};

export default FullStoryCard;
