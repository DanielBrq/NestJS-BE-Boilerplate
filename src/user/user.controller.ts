// =========== Imports ============
import {
  Controller,
  Post,
  Body,
  HttpCode,
  UsePipes,
  Req,
} from '@nestjs/common';
import { ApiBody, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { VineValidationPipe } from '../common/pipes/vine-validation.pipe';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import {
  CreateUserSchema,
  SignInEmailSchema,
  CreateUserBodyDto,
  SignInEmailBodyDto,
  type CreateUserDto,
  type SignInEmailDto,
} from './dto';

// =========== Controller ============
@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Sign Up ==========================================
  @Post('sign-up-email')
  @HttpCode(201)
  @ApiBody({ type: CreateUserBodyDto })
  @UsePipes(new VineValidationPipe(CreateUserSchema))
  @AllowAnonymous()
  async signUpEmail(@Body() createUserDto: CreateUserDto) {
    return this.userService.signUpEmail(
      createUserDto.email,
      createUserDto.password,
      createUserDto.name,
    );
  }

  // Sign In ==========================================
  @Post('sign-in-email')
  @HttpCode(200)
  @ApiBody({ type: SignInEmailBodyDto })
  @UsePipes(new VineValidationPipe(SignInEmailSchema))
  @AllowAnonymous()
  async signInEmail(@Body() body: SignInEmailDto) {
    return this.userService.signInEmail(body.email, body.password);
  }

  // Sign Out ==========================================
  @Post('sign-out')
  @HttpCode(200)
  async signOut(@Req() req: { headers: Headers }) {
    return this.userService.signOut(req);
  }
}
