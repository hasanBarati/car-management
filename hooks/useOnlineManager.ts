import { onlineManager } from '@tanstack/react-query'
import * as Network from 'expo-network'


export const useOnlineManager = () => {
    onlineManager.setEventListener((setOnline) => {
        return Network.addNetworkStateListener((state) => {
          setOnline(state.isConnected)
        })
      })
};




