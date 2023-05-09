import React, { useState, useEffect, useRef} from "react";
import { View, StyleSheet, Text,Dimensions, Platform, TouchableOpacity} from "react-native";
import Video from 'react-native-video';
import { useBitSize } from "../utils/bitsize";
import { useIsFocused } from "@react-navigation/native";


const {height, width} = Dimensions.get('window')


const TvScreen = ({navigation,navigator}) => {


    const playerRef = useRef()
    const timeoutRef = useRef()
    const [loading, setLoading] = useState(false);
    const [overlayShow, setOverlayShow] = useState(false)
    const [seeking, setSeeking] = useState(false)
    const [bitSize, setBitrate] = useBitSize(0)
    const [totalDuration, setTotalDuration] = useState(0);
    const [process, setProcess] = useState({
        currentTime: 0,
        playableDuration: 0,
        seekableDuration: 0
    });

    const isFocused = useIsFocused();

    const onProgress = (params) => {
        if (!seeking) {
            setProcess(params)
        }
    }

    const onLoad = ({ duration }) => {
        setTotalDuration(duration)
    }

    const createControlTimeout = () => {
        /* @ts-ignore */
        timeoutRef.current = setTimeout(() => setOverlayShow(false), 3000)
    }
    const clearControlDismissTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = undefined;
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}} >
                <Text style={{color:'#ababab', fontSize: 24}}>Back</Text>
            </TouchableOpacity>

            <Video
                source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }}
                onBuffer={({ isBuffering }) => {setLoading(isBuffering);console.log("buffereing")}}
                reportBandwidth
                onBandwidthUpdate={
                    ({ bitrate }) => setBitrate(bitrate)
                }
                onProgress={onProgress}
                /* @ts-ignore */
                ref={ref => playerRef.current = ref}
                onPlaybackStateChanged={
                    ({ isPlaying }) => {
                        if (isPlaying) {
                            createControlTimeout()
                        }
                        else {
                            clearControlDismissTimeout()
                        }
                    }
                }
                minLoadRetryCount={100}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor:'#c7c7c7'
                }}
            />
        </View>
    )   
}

export default TvScreen;

const styles = new StyleSheet.create({
    container  : {
        flex:1,
        flexDirection:'column'
    },

    backgroundVideo: {
        width:'100%',
        height:'100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor:"#ababab"
      },
})
