import {Paper, Stack, styled, Typography} from "@mui/material";
import {ConversationSide, conversationSignal} from "../App";

export const Content = () => {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // Used for fade effect for chat items (incomplete)
    /*const myRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const checkVisibility = () => {
        const rect = myRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
    }, []);*/

    // Also used for fade effect
    /*return <Fade in={isVisible}>
        <div ref={myRef}>{item}</div>
    </Fade>*/

    return (
        <Stack direction="column"
               alignSelf="center"
               justifyContent="flex-end"
               width="70%"
               spacing={5}>
            {conversationSignal.value.map(item => {
                const message = item.message;

                return (
                    <Item key={message}>
                        <Typography component="div"
                                    style={{justifyContent: "center", alignItems: "flex-start", display: "flex"}}>
                            {(item.side === ConversationSide.AI ? "AI: " : "User: ")}{}
                            {message}
                        </Typography>
                    </Item>
                );
            })}
        </Stack>
    );
}