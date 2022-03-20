import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageParserService {
  public parseStringToMarkdownWithLinks(str: string): string {
    return str.replace(/(https?:\/\/[^\s]+)/g, '[$1]($1)');
  }
}
