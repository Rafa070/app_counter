import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

export default function Loading({visible}){
    return (
        <View>
           
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    
                <ActivityIndicator
size="large"
color={"blue"}
animating={true}
style={{
alignSelf: 'center', 
justifyContent: 'center',
position: 'absolute',
}}
/>
                </View>
            
        </View>
    );
}


