import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { App } from '@capacitor/app';

class AcessaiApp {
    constructor() {
        this.init();
    }

    async init() {
        console.log('Initializing Acessai App...');
        
        // Wait for device ready
        if (Capacitor.isNativePlatform()) {
            await this.requestLocationPermissions();
            this.setupBackButtonHandler();
        }
        
        this.setupWebviewHandling();
        this.setupSafeAreaHandling();
    }

    async requestLocationPermissions() {
        try {
            console.log('Requesting location permissions...');
            // Request location permissions on first launch
            const permissions = await Geolocation.requestPermissions();
            console.log('Location permissions result:', permissions);
            
            if (permissions.location === 'granted') {
                console.log('Location permissions granted');
            } else {
                console.log('Location permissions denied or not available');
            }
        } catch (error) {
            console.error('Error requesting location permissions:', error);
        }
    }

    setupBackButtonHandler() {
        console.log('Setting up back button handler...');
        // Prevent app from closing on back button
        App.addListener('backButton', ({ canGoBack }) => {
            console.log('Back button pressed, preventing app closure. canGoBack:', canGoBack);
            // Don't call App.exitApp() to prevent closing
            // You could add navigation logic here if needed
        });
    }

    setupWebviewHandling() {
        const iframe = document.getElementById('webview-frame');
        const loading = document.getElementById('loading');

        if (!iframe || !loading) {
            console.error('Required elements not found');
            return;
        }

        iframe.onload = () => {
            console.log('Webview loaded successfully');
            loading.style.display = 'none';
        };

        iframe.onerror = () => {
            console.error('Error loading webview');
            loading.innerHTML = 'Erro ao carregar. Verifique sua conexão com a internet.';
            loading.style.color = '#ff6b6b';
        };

        // Handle iframe navigation
        iframe.onbeforeunload = () => {
            console.log('Webview is navigating...');
            loading.style.display = 'block';
            loading.innerHTML = 'Carregando...';
            loading.style.color = '#666';
        };
    }

    setupSafeAreaHandling() {
        // Add CSS custom properties for safe area handling
        const root = document.documentElement;
        
        // Set default safe area values for Android gesture navigation
        if (Capacitor.getPlatform() === 'android') {
            root.style.setProperty('--safe-area-inset-bottom', '20px');
            root.style.setProperty('--safe-area-inset-top', '0px');
            
            // Apply safe area handling to body
            document.body.style.paddingBottom = 'var(--safe-area-inset-bottom)';
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    new AcessaiApp();
});

// Also initialize when Capacitor is ready (for native platforms)
document.addEventListener('deviceready', () => {
    console.log('Device ready, reinitializing app...');
    new AcessaiApp();
});