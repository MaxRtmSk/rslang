import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import { Pagination } from '@material-ui/lab';
import s from './PageWords.module.css'

const useStyles = makeStyles((theme) =>
    createStyles({
        pagination: {
            margin: '1em',
        },
        titleContainer: {
            display: 'flex',
        },
        volumeBtn: {
            minWidth: 0,
            minHeight: 0
        },
        deleteBtn: {
            background: theme.palette.error.main,
            color: '#fffbfbde',
            '&:hover': {
                background: '#c1625d',
            }
        },
        difficultBtn: {
            background: theme.palette.warning.main,
            color: 'rgb(84 35 35 / 87%)',
            '&:hover': {
                background: '#ecba6bfa',
            }
        }
    }))

const PageWords = (props) => {
    const classes = useStyles()
    const apiUrl = 'https://react-learn-words.herokuapp.com'

    let words = props.words.map((word, index) => {
        return <div key={index} className={s.wordContainer}>
            <div className={s.wordDescription}>
                <Box className={classes.titleContainer} mb={2}>
                    <div className={s.wordImage} style={{ backgroundImage: `url('${apiUrl}/${word.image}')` }}>
                    </div>
                    <Box className={classes.titleContainer}>
                        <h3 className={s.wordTranscription}>
                            {word.word} {word.transcription}
                        </h3>
                        <Button
                            size='small'
                            className={classes.volumeBtn}
                            onClick={() => props.clickAudioHandler(`${apiUrl}/${word.audio}`)}
                            startIcon={<VolumeUpIcon style={{ color: '#414954' }} />}
                        />
                    </Box>
                </Box>
                <span className={s.textMeaning}>
                    {word.textMeaning}
                    <Button
                        onClick={() => props.clickAudioHandler(`${apiUrl}/${word.audioMeaning}`)}
                        startIcon={<VolumeUpIcon style={{ color: '#414954' }} />}
                    />
                </span>
                {props.settings.isShowTranslate ?
                    <span className={s.textMeaningTranslate}>
                        {word.textMeaningTranslate}
                    </span>
                    : null
                }
                <span className={s.textExample}>
                    {word.textExample}
                    <Button
                        onClick={() => props.clickAudioHandler(`${apiUrl}/${word.audioExample}`)}
                        startIcon={<VolumeUpIcon style={{ color: '#414954' }} />}
                    />
                </span>
                {props.settings.isShowTranslate ?
                    <span className={s.textExampleTranslate}>
                        {word.textExampleTranslate}
                    </span>
                    : null
                }
            </div>
            {props.settings.isShowButtons ?
                <div className={s.buttonsContainer}>
                    <Button
                        variant="contained"
                        className={classes.difficultBtn}
                        color="error"
                        startIcon={<WarningIcon />}
                    >
                        сложное слово
                </Button>
                    <Button
                        variant="contained"
                        className={classes.deleteBtn}
                        startIcon={<DeleteIcon />}
                        onClick={() => props.deleteWordClickHandler(word._id, index)}
                    >
                        удалить слово
                </Button>
                </div>
                : null
            }
        </div>
    })

    let pagesCount
    let pages = []

    if (props.totalUserCount === 0) {
        pagesCount = props.totalPages
    } else {
        pagesCount = Math.ceil(props.totalUserCount / props.wordsPerPage)
    }

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pageContainer}>
            <Pagination
                className={classes.pagination}
                count={pages.length}
                page={props.currentPage}
                boundaryCount={2}
                onChange={(e, value) => { props.onPageChanged(value) }}
            />
            <div className={s.wordsContainer}>
                {words}
            </div>
        </div>
    )
}

export default PageWords