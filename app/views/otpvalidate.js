import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground,Keyboard, TextInput } from 'react-native'
import { colors,globalstyles,fontFamily,fontSize } from '../assets/globalstyleconstants';
import TextInputCard from '../components/textinputcard'


export default class OtpValidate extends Component {
    constructor(props){
        super(props);
        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ]
        this.state={
            mobileHolderColor:colors.white,
            otpNum: '',
            otpArray: ['1','2','3','4'],
            defaultNum:'1',
            message:'',
            
       }
       this.otpNumHandler = this.otpNumHandler.bind(this)
       this.onChangeHandler = this.onChangeHandler.bind(this)
       this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    otpNumHandler(num) {
        this.setState({otpNum:num})
        
    }
    _goNextAfterEdit(index){
        this.inputRefs[index+1].focus()
        
    }
    
    onChangeHandler(event,message,index){
        this.setState({message: message + event})
                                        
        if ( index === this.state.otpArray.length-1 ){ 
            // issue with last event addition
            alert(message + event)
            // Keyboard.dismiss()

        }
        else {
            this._goNextAfterEdit(index)
        }
    }
    
    handleKeyPress(nativeEvent,index) {
        if (nativeEvent.key === 'Backspace') {
            
            if (index === 0){
                return
            }
            else{
                this.inputRefs[index-1].focus()
            }
        }
        // nativeEvent.key === 'Backspace' ? alert('delete') : alert('ghjgjh')

    }
    componentDidMount = () =>{
        // this.refs.defaultNum.focus()
    }
    
    render() {
        let image = {uri:'https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
        const { otpArray,mobileHolderColor,message } = this.state
        return (
            <View style={styles.container}>
                <ImageBackground source={image} 
                                 style={styles.image}>
    
                    <Text style={[styles.mobile,globalstyles.hspace]}>
                                Enter OTP
                    </Text>
                    
                    <View style={[styles.inputcard,globalstyles.hspace]}>
                        
                        {otpArray.map((item,index) => 
                                    
                                    <View key={index}>
                                        <TextInputCard 
                                        inputRef={r => this.inputRefs[index] =  r}
                                        maxLength={1}
                                        width={75} 
                                        height={60} 
                                        placeholderTextColor={mobileHolderColor}
                                        // title={this.state.otpNum}
                                        onChange={(event) =>  this.onChangeHandler(event,message,index)}
                                        onkeypress={({nativeEvent}) => this.handleKeyPress(nativeEvent,index)}
                                        />
                                    </View>
                            )}
                     
                    </View>
        
                    
                </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    image: {
        flex:1,
        // resizeMode: "cover",
        justifyContent: "center",
        // backgroundColor:'rgba(0,0,0,0.8)'
    },
    mobile:{
        color:colors.white,
        fontSize:fontSize.larger,
        fontFamily:fontFamily.bold,  
    },
    inputcard:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        // width:'44%',
        // backgroundColor:'blue'
    }
})
