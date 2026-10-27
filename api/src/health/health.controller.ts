import { Controller, Get } from '@nestjs/common';
import { timeStamp } from 'console';

@Controller('health')
export class HealthController {
    @Get()
    checkHealth() {
        return {
            status: 'ok',
            service: 'real-estate-api',
            timeStamp: new Date().toISOString(),
        };
    }
}